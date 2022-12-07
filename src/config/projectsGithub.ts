export interface GithubRepos{
  id: string
  name:string
  description:string
  url:string
  stargazers_count: number
  homepage: string | null
  languages_url: string
  watchers: number
  forks: number
  html_url:string
}

export interface GithubRepositoryesWithURLPage{
  id: string,
  name: string,
  description: string,
  tags: string[],
  source_code: string,
  demo: string
}

export async function ProjectsGithub(){
  const repoRes = await fetch(
    `https://api.github.com/users/valeriaresco/repos?per_page=100`,
    // {
    //   headers: {
    //     Authorization: `token ${process.env.GITHUB_API_KEY}`,
    //   },
    // }
  );
  let repos:GithubRepos[] = await repoRes.json();
  repos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    // .slice(0, 9);

  repos = repos.filter((item)=> item.homepage!==null??item)
  let reposFiltered:GithubRepositoryesWithURLPage[] = []
  for (let index = 0; index < repos.length; index++) {
    const item = repos[index];
    let tagsLanguagesRes = await fetch(
      item.languages_url,
      // {
      //   headers: {
      //     Authorization: `token ${process.env.GITHUB_API_KEY}`,
      //   },
      // }
    );

    let tagsLanguages = await tagsLanguagesRes.json();
    reposFiltered.push({
      id: item.id,
      name: item.name,
      description: item.description,
      tags: Object.keys(tagsLanguages),
      source_code: item.url,
      demo: `https://${item.homepage?.replace('https://','')}`
    })
  }
  return reposFiltered
}