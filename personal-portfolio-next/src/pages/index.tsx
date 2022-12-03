import Head from 'next/head'
import Image from 'next/image'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { GetStaticProps } from 'next';

export interface GithubUser{
  avatar_url: string,
  login: string,
  public_repos: number,
  followers: number
}
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

interface GithubPageProps {
  user: GithubUser,
  repos: GithubRepos []
}

export default function Home({ repos, user }:GithubPageProps) {
  return (
    <div>
      <NavBar githubUserInfo={user}/>
      <Banner />
      <Skills />
      <Projects githubRepos={repos}/>
      {/* <Contact /> */}
      <Footer githubUserInfo={user}/>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  const user:GithubUser = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
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
    
  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 60*60*12,
  };
}
