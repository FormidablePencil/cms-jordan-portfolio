
export const pfcDefaults = {
  tabSectionTitles: [
    {
      tabTitle: 'Intro',
    },
    {
      tabTitle: 'TechStack',
    },
    {
      tabTitle: 'Content',
      subSections: [
        { tabTitle: 'Images' },
        { tabTitle: 'Videos' },
        { tabTitle: 'Technologies' }
      ]
    },
    {
      tabTitle: 'Info & Contacts',
      subSections: [
        { tabTitle: 'Bio' },
        { tabTitle: 'Contacts' }
      ]
    }
  ],
  introParagraph: '',
  videoProjects: { url: '', alt: '' },
  tech: { icon: '', video: '', alt: '' },
  moreTech: { icon: '', alt: '' },
  photoshop: { url: '', alt: '' },
  bio: { title: '', paragraph: '' },
  contacts: { email: '', github: '', linkedin: '' },
}

export const initialPortfolioContent: portfolioContentT = {
  tabSectionTitles: pfcDefaults.tabSectionTitles,
  introParagraph: pfcDefaults.introParagraph,
  videoProjects: [pfcDefaults.videoProjects],
  tech: [pfcDefaults.tech],
  moreTech: [pfcDefaults.moreTech],
  photoshop: [pfcDefaults.photoshop],
  bio: pfcDefaults.bio,
  contacts: pfcDefaults.contacts
}

export interface portfolioContentT {
  tabSectionTitles: {
    [index: number]: {
      tabTitle: string, subSections?: { [index: number]: { tabTitle: string } }
    }
  }
  introParagraph: string
  videoProjects: {
    [index: number]: {
      url: string, alt: string
    }
    length: any
    map: Function
  }
  tech: {
    [index: number]: {
      icon: string, video: string, alt: string
    }
    length: any
    map: Function
  },
  moreTech: {
    [index: number]: {
      icon: string, alt: string
    }
    length: any
    map: Function
  }
  photoshop: {
    [index: number]: {
      url: string, alt: string
    }
    length: any
    map: Function
  }
  bio: {
    title: string, paragraph: string
  }
  contacts: {
    email: string, github: string, linkedin: string
  }
}
