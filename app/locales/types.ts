export interface DepartmentItem {
  title: string;
  description: string;
}

export interface EventItem {
  name: string;
  event: string;
  image: string;
}

export interface TeamRole {
  role: string;
  names: string[];
}

export interface TeamDepartment {
  name: string;
  members: TeamRole[];
}

export interface Locale {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    usefulInfo: string;
    eventNotification: string;
    businessCooperation: string;
    membershipCard: string;
    departments: string;
    aboutUs: string;
    adminLogin: string;
    eventReview: string;
  };
  hero: {
    slides: Map<string, string>;
  };
  events: {
    title: string;
    description: string;
    items: EventItem[];
  };
  departments: {
    title: string;
    description: string;
    items: DepartmentItem[];
  };
  manual: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    imagePlaceholder: string;
    team: TeamDepartment[];
  };
  logoCollection: {
    title: string;
  };
  footer: {
    title: string;
  };
}
