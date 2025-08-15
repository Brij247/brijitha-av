export const realWorldProjects = [
  {
    title: "AUTH-HUB",
    description:
      "Developed a centralized authentication hub that serves as both a Single Sign-On (SSO) gateway and a navigation home for multiple integrated applications. Users can access this hub to authenticate once and be automatically redirected to their intended application, enabling smooth cross-application access without repeated logins.",
    portfolioPoints: [
      {
        point:
          "Developed a centralized authentication hub serving as a single point of sign-in and navigation for all integrated applications.",
      },
      {
        point:
          "Initially built the solution using React and implemented Keycloak for authentication, delivering a well-structured and maintainable authentication flow.",
      },
      {
        point:
          "Migrated the application to Next.js, integrating NextAuth with a Keycloak client-side provider, and built refresh token and valid session management logic from scratch.",
      },
      {
        point:
          "Successfully implemented Single Sign-On (SSO) across all integrated applications using browser cookies to share authentication state.",
      },
      {
        point:
          "Designed and integrated an SSO-based authentication flow for all connected applications, ensuring seamless cross-application access without repeated logins.",
      },
      {
        point:
          "Added Azure AD authentication integration for both sign-in and sign-out flows to support multiple identity providers.",
      },
      {
        point:
          "Ensured a scalable and maintainable authentication architecture for future integrations.",
      },
    ],
    techStack:
      "Next JS, React JS, NextAuth, Keycloak JS, Azure AD, SSO, OIDC, JWT, Ant Design System/component lib",
  },
  {
    title: "UI COMPONENT LIBRARY",
    description:
      "Developed a highly reusable UI Component Library using Storybook, React, and Ant Design, improving development efficiency by 30% across applications. Designed a customizable Layout component with sidebar menus, header, footer, theme switching, localization, and developer-defined custom menus. Ensured mobile-friendly, consistent UI experiences and maintained detailed Storybook documentation for every component.",
    portfolioPoints: [
      {
        point:
          "Built a reusable UI Component Library using Storybook, React, and Ant Design, improving development speed by 50% across all integrated applications.",
      },
      {
        point:
          "Developed a flexible Layout component with sidebar menus, header, footer, and user settings for theme switching, localization, and developer-defined custom menus.",
      },
      {
        point:
          "Ensured all components were fully responsive and mobile-friendly for consistent cross-device experiences.",
      },
      {
        point:
          "Maintained and co-developed the component library, documenting each component in Storybook for easy adoption and onboarding.",
      },
      {
        point:
          "Enabled rapid UI development by providing ready-to-use, consistent, and scalable components and utility functions.",
      },
      {
        point:
          "Collaborated with multiple teams to standardize UI/UX across applications, reducing duplicate effort and improving maintainability.",
      },
    ],
    techStack: "Storybook, React JS, Antd",
  },
  {
    title: "PAYMENTS",
    description:
      "Contributed to the development of the Payments application for a global banking client, delivering complex, dynamic form features, secure authentication architecture, and scalable role-based access control. Led key feature implementations, maintained core components, and architected critical UI pages for systems such as SWIFT, FedNow, and Fedwire.",
    portfolioPoints: [
      {
        point:
          "Developed a complex three-level smart form with dynamic field updates based on user selections and server-provided prebuilt options.",
      },
      {
        point:
          "Implemented role-based access control (RBAC) for both feature-level and page-level authorization.",
      },
      {
        point:
          "Integrated environment-specific authentication architecture for both development and production modes.",
      },
      {
        point:
          "Led and architected a complex listing page and detailed view sections for global banking clients including SWIFT, FedNow, and Fedwire.",
      },
      {
        point:
          "Took ownership of maintaining core-level components such as Layout, RBAC, and authentication-related features.",
      },
      {
        point:
          "Collaborated closely with stakeholders to ensure scalable, maintainable, and secure feature delivery.",
      },
    ],

    techStack:
      "Next JS, React JS, Ant Design System, Next Auth, FSD Architecture",
  },
  {
    title: "COMPLIANTS",
    description:
      "Developed and architected the Compliance application, featuring a dynamic, API-driven prefilled form with create, edit, save, and delete capabilities. Designed intelligent form flows where user inputs dynamically update other fields, implemented caching to optimize performance, and ensured smooth collaboration with backend teams. Successfully led sprint planning and delivered the project within the timeline.",
    portfolioPoints: [
      {
        point:
          "Architected and developed the Compliance application with listing and dynamic prefilled form sections.",
      },
      {
        point:
          "Implemented create, edit, save, and delete capabilities for forms with real-time dynamic field updates based on user inputs.",
      },
      {
        point:
          "Integrated API-driven values into form fields, ensuring seamless data flow and user experience.",
      },
      {
        point:
          "Optimized performance by implementing caching mechanisms to reduce re-renders during state updates.",
      },
      {
        point:
          "Collaborated with backend developers and business analysts to refine workflows and align UI/UX with requirements.",
      },
      {
        point:
          "Led sprint planning, managed development timelines, and delivered the complete application on schedule.",
      },
    ],

    techStack:
      "Next JS, React JS, Next auth, SWR, ANTD component library, FSD Architecture",
  },
  {
    title: "CASH POSITIONS",
    description:
      "Contributed to the Cash Positions application by developing a dashboard with multiple chart and graph-based visualizations, enabling real-time insights into financial data. Ensured responsive design, optimized rendering performance, and delivered an intuitive, data-driven user experience.",
    portfolioPoints: [
      {
        point:
          "Developed the dashboard page for the Cash Positions application, showcasing multiple chart and graph-based data visualizations.",
      },
      {
        point:
          "Integrated real-time and dynamic financial data into interactive charts for better decision-making.",
      },
      {
        point:
          "Ensured charts were responsive, visually consistent, and optimized for performance.",
      },
      {
        point:
          "Worked with stakeholders to refine visualization requirements and enhance user experience.",
      },
    ],
    techStack: "Next JS, React JS, Antd Component lib, Keycloak, Next Auth",
  },
  {
    title: "ENTERPRISE INTEGRATOR",
    description:
      "Enterprise Integrator – Worked on a legacy application and enhanced the message flow feature, ensuring a user-friendly experience for one of the application’s core functionalities. Implemented authentication using Keycloak JS and ensured proper redirection handling. This work improved the application’s security and user navigation flow.",
    portfolioPoints: [
      {
        point:
          "Worked on the legacy Enterprise Integrator application, focusing on the message flow feature — a core user action pathway.",
      },
      {
        point:
          "Enhanced user experience by refining the flow and ensuring intuitive navigation.",
      },
      {
        point:
          "Implemented authentication for the legacy application using Keycloak JS.",
      },
      {
        point:
          "Handled secure redirection logic to ensure a smooth and safe login process.",
      },
      {
        point:
          "Collaborated with team members to modernize and maintain critical parts of the application.",
      },
    ],
    techStack:
      "React JS, Keycloak JS, AntD component library, Redux Toolkit, React-flow",
  },
];
