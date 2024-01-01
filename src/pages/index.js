import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="This site provides PantsuStreaming documentation, references, and sample code tutorials."
      >
      <header className="hero hero--primary hero-banner">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="buttons-pages">
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={"/docs/Manual/Get%20Started/CreatePlugin"}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
