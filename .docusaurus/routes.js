import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/BSTDocs/__docusaurus/debug',
    component: ComponentCreator('/BSTDocs/__docusaurus/debug', 'aa3'),
    exact: true
  },
  {
    path: '/BSTDocs/__docusaurus/debug/config',
    component: ComponentCreator('/BSTDocs/__docusaurus/debug/config', 'f42'),
    exact: true
  },
  {
    path: '/BSTDocs/__docusaurus/debug/content',
    component: ComponentCreator('/BSTDocs/__docusaurus/debug/content', '331'),
    exact: true
  },
  {
    path: '/BSTDocs/__docusaurus/debug/globalData',
    component: ComponentCreator('/BSTDocs/__docusaurus/debug/globalData', 'c25'),
    exact: true
  },
  {
    path: '/BSTDocs/__docusaurus/debug/metadata',
    component: ComponentCreator('/BSTDocs/__docusaurus/debug/metadata', '2be'),
    exact: true
  },
  {
    path: '/BSTDocs/__docusaurus/debug/registry',
    component: ComponentCreator('/BSTDocs/__docusaurus/debug/registry', '771'),
    exact: true
  },
  {
    path: '/BSTDocs/__docusaurus/debug/routes',
    component: ComponentCreator('/BSTDocs/__docusaurus/debug/routes', '42f'),
    exact: true
  },
  {
    path: '/BSTDocs/blog',
    component: ComponentCreator('/BSTDocs/blog', 'a1c'),
    exact: true
  },
  {
    path: '/BSTDocs/blog/archive',
    component: ComponentCreator('/BSTDocs/blog/archive', '921'),
    exact: true
  },
  {
    path: '/BSTDocs/blog/authors',
    component: ComponentCreator('/BSTDocs/blog/authors', '14a'),
    exact: true
  },
  {
    path: '/BSTDocs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/BSTDocs/blog/authors/all-sebastien-lorber-articles', 'bfb'),
    exact: true
  },
  {
    path: '/BSTDocs/blog/authors/yangshun',
    component: ComponentCreator('/BSTDocs/blog/authors/yangshun', 'a03'),
    exact: true
  },
  {
    path: '/BSTDocs/blog/first-blog-post',
    component: ComponentCreator('/BSTDocs/blog/first-blog-post', 'ff7'),
    exact: true
  },
  {
    path: '/BSTDocs/blog/long-blog-post',
    component: ComponentCreator('/BSTDocs/blog/long-blog-post', '477'),
    exact: true
  },
  {
    path: '/BSTDocs/blog/mdx-blog-post',
    component: ComponentCreator('/BSTDocs/blog/mdx-blog-post', 'd78'),
    exact: true
  },
  {
    path: '/BSTDocs/blog/tags',
    component: ComponentCreator('/BSTDocs/blog/tags', 'edc'),
    exact: true
  },
  {
    path: '/BSTDocs/blog/tags/docusaurus',
    component: ComponentCreator('/BSTDocs/blog/tags/docusaurus', 'a8b'),
    exact: true
  },
  {
    path: '/BSTDocs/blog/tags/facebook',
    component: ComponentCreator('/BSTDocs/blog/tags/facebook', '0a7'),
    exact: true
  },
  {
    path: '/BSTDocs/blog/tags/hello',
    component: ComponentCreator('/BSTDocs/blog/tags/hello', '55b'),
    exact: true
  },
  {
    path: '/BSTDocs/blog/tags/hola',
    component: ComponentCreator('/BSTDocs/blog/tags/hola', '633'),
    exact: true
  },
  {
    path: '/BSTDocs/blog/welcome',
    component: ComponentCreator('/BSTDocs/blog/welcome', '2dc'),
    exact: true
  },
  {
    path: '/BSTDocs/markdown-page',
    component: ComponentCreator('/BSTDocs/markdown-page', '372'),
    exact: true
  },
  {
    path: '/BSTDocs/docs',
    component: ComponentCreator('/BSTDocs/docs', '0ac'),
    routes: [
      {
        path: '/BSTDocs/docs',
        component: ComponentCreator('/BSTDocs/docs', '9f0'),
        routes: [
          {
            path: '/BSTDocs/docs/tags',
            component: ComponentCreator('/BSTDocs/docs/tags', '8f4'),
            exact: true
          },
          {
            path: '/BSTDocs/docs/tags/drayman',
            component: ComponentCreator('/BSTDocs/docs/tags/drayman', '47a'),
            exact: true
          },
          {
            path: '/BSTDocs/docs/tags/guide',
            component: ComponentCreator('/BSTDocs/docs/tags/guide', '7db'),
            exact: true
          },
          {
            path: '/BSTDocs/docs/tags/javascript',
            component: ComponentCreator('/BSTDocs/docs/tags/javascript', 'a2b'),
            exact: true
          },
          {
            path: '/BSTDocs/docs/tags/jsx',
            component: ComponentCreator('/BSTDocs/docs/tags/jsx', '1c9'),
            exact: true
          },
          {
            path: '/BSTDocs/docs/tags/mongodb',
            component: ComponentCreator('/BSTDocs/docs/tags/mongodb', '602'),
            exact: true
          },
          {
            path: '/BSTDocs/docs/tags/node',
            component: ComponentCreator('/BSTDocs/docs/tags/node', '81b'),
            exact: true
          },
          {
            path: '/BSTDocs/docs/tags/tailwindcss',
            component: ComponentCreator('/BSTDocs/docs/tags/tailwindcss', '98c'),
            exact: true
          },
          {
            path: '/BSTDocs/docs/tags/typescript',
            component: ComponentCreator('/BSTDocs/docs/tags/typescript', 'f93'),
            exact: true
          },
          {
            path: '/BSTDocs/docs',
            component: ComponentCreator('/BSTDocs/docs', '71e'),
            routes: [
              {
                path: '/BSTDocs/docs/',
                component: ComponentCreator('/BSTDocs/docs/', '470'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/blog/building-real-time-todo-app-with-drayman-mongodb-and-tailwind-css',
                component: ComponentCreator('/BSTDocs/docs/blog/building-real-time-todo-app-with-drayman-mongodb-and-tailwind-css', '7f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/blog/getting-started-with-drayman',
                component: ComponentCreator('/BSTDocs/docs/blog/getting-started-with-drayman', '4fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/category/tutorial---basics',
                component: ComponentCreator('/BSTDocs/docs/category/tutorial---basics', '2e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/category/tutorial---extras',
                component: ComponentCreator('/BSTDocs/docs/category/tutorial---extras', '1d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/docs/components-in-depth/component-lifecycle',
                component: ComponentCreator('/BSTDocs/docs/docs/components-in-depth/component-lifecycle', '160'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/docs/components-in-depth/default-props',
                component: ComponentCreator('/BSTDocs/docs/docs/components-in-depth/default-props', '133'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/docs/components-in-depth/handling-events',
                component: ComponentCreator('/BSTDocs/docs/docs/components-in-depth/handling-events', '0b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/docs/components-in-depth/helpers/force-update',
                component: ComponentCreator('/BSTDocs/docs/docs/components-in-depth/helpers/force-update', '6ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/docs/components-in-depth/helpers/introduction',
                component: ComponentCreator('/BSTDocs/docs/docs/components-in-depth/helpers/introduction', '27c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/docs/components-in-depth/helpers/props',
                component: ComponentCreator('/BSTDocs/docs/docs/components-in-depth/helpers/props', '3f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/docs/components-in-depth/helpers/the-component-instance-object',
                component: ComponentCreator('/BSTDocs/docs/docs/components-in-depth/helpers/the-component-instance-object', '317'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/docs/components-in-depth/helpers/the-event-hub-object',
                component: ComponentCreator('/BSTDocs/docs/docs/components-in-depth/helpers/the-event-hub-object', '532'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/docs/interactive-examples/file-viewer',
                component: ComponentCreator('/BSTDocs/docs/docs/interactive-examples/file-viewer', 'e51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/docs/introduction/configuration',
                component: ComponentCreator('/BSTDocs/docs/docs/introduction/configuration', '874'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/docs/introduction/getting-started',
                component: ComponentCreator('/BSTDocs/docs/docs/introduction/getting-started', '104'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/docs/introduction/server-and-client-combined',
                component: ComponentCreator('/BSTDocs/docs/docs/introduction/server-and-client-combined', 'e56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/docs/postcss-and-tailwind-css',
                component: ComponentCreator('/BSTDocs/docs/docs/postcss-and-tailwind-css', '9cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/docs/web-components/drayman-elements',
                component: ComponentCreator('/BSTDocs/docs/docs/web-components/drayman-elements', '2f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/intro',
                component: ComponentCreator('/BSTDocs/docs/intro', '78a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/src/pages/markdown-page',
                component: ComponentCreator('/BSTDocs/docs/src/pages/markdown-page', 'f5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/BSTDocs/docs/tutorial-basics/congratulations', '421'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/BSTDocs/docs/tutorial-basics/create-a-blog-post', '64e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/BSTDocs/docs/tutorial-basics/create-a-document', 'b34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/BSTDocs/docs/tutorial-basics/create-a-page', 'fe5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/BSTDocs/docs/tutorial-basics/deploy-your-site', 'ba5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/BSTDocs/docs/tutorial-basics/markdown-features', '5b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/BSTDocs/docs/tutorial-extras/manage-docs-versions', 'acd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/BSTDocs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/BSTDocs/docs/tutorial-extras/translate-your-site', 'fe0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/BSTDocs/',
    component: ComponentCreator('/BSTDocs/', '3ce'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
