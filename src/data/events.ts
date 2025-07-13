export type Event = {
    type: 'Roundtable' | 'Keynote Presentation' | 'In Conversation';
    title: string;
    time: string; // This could be further broken down into date and time objects if needed
    overview?: string;
    speakers: Speaker[];
};

export type Speaker = {
    name: string;
    title: string;
    organization?: string;
};

export const events: Array<Event> = [
    {
        type: 'Roundtable',
        title: 'Navigating Elections in a Pandemic: Lessons Learned from COVID-19',
        time: 'Tuesday 14th 1100h-1200h',
        overview: 'The COVID-19 pandemic has presented unique challenges for electoral management bodies (EMBs) around the globe. As countries grappled with the public health crisis, maintaining the integrity and accessibility of elections became a critical concern. This panel discussion will explore the various strategies and measures implemented by EMBs to ensure safe, inclusive, and transparent elections during the pandemic. Panelists will share their experiences, the challenges faced, and the lessons learned from navigating elections in these unprecedented times.',
        speakers: [
            { name: 'João Almeida', title: 'Commissioner', organization: 'Portuguese National Election Commission' },
            { name: 'Joaquim Morgado', title: 'Commissioner', organization: 'Portuguese National Election Commission' },
            { name: 'Thomas Hicks', title: 'Commissioner', organization: 'U.S. Election Assistance Commission' },
            { name: 'Judge Patricia Lorenzo Paniagua', title: 'Central Electoral Commission of the Dominican Republic' },
        ]
    },
    {
        type: 'Keynote Presentation',
        title: 'The Observer & the Observed – How the Electoral Cycle is Monitored',
        time: 'Tuesday 14th 1215h-1315h',
        overview: 'In 1997, Thomas Carothers published an article titled The rise of election monitoring. The observers observed. Back then, he claimed that “[e]lection observation… [was] the best-established, most visible, and often best-funded type of democracy-related assistance.” He listed the Carter Center, the National Democratic Institute and the International Republican Institute, the United Nations, the Organization of American States (OAS), the Organization for Security and Cooperation in Europe (OSCE), and the Organization of African Unity, amongst some of the organizations that sent observers to elections around the world. The article also lists some positive contributions, but also delves into problems of unprofessional behavior, excessive focus on election day, ill definition of standards to report findings, and partiality. Where are we 25 years later? How are electoral observers dealing with the use of digital technologies in different stages of the electoral process? Are there new methodologies available to monitor elections from different angles? In short: why, who, when, and how elections are observed? I will present answers with examples from Latin America and a few more questions that may be useful when engaging in this debate.',
        speakers: [
            { name: 'Alberto Guevara', title: 'Former Director', organization: 'the Electoral Tribunal of the Federal Judiciary (Mexico)' }
        ]
    },
    {
        type: 'Roundtable',
        title: 'The Future of Voting: Voter Identification, Biometrics, and Electronic Voting',
        time: 'Tuesday 14th 1445h-1545h',
        overview: 'Technological advancements offer new possibilities for improving electoral management processes, including voter identification, biometrics, and electronic voting. This panel discussion will delve into the potential benefits, challenges, and implications of these emerging technologies for EMBs. Panelists will examine case studies, share their experiences, and discuss best practices for successfully integrating technology into the electoral process.',
        speakers: [
            { name: 'Alberto Guevara', title: 'Former Director', organization: 'the Electoral Tribunal of the Federal Judiciary (Mexico)' },
            { name: 'Greg Essensa', title: 'Chief Electoral Officer', organization: 'Elections Ontario' },
            { name: 'Giorgi Kalandarishvili', title: 'Chairperson', organization: 'Central Election Commission of Georgia' },
            { name: 'Denis Kačan', title: 'Product Lead', organization: 'Neurotechnology' }
        ]
    },
    {
        type: 'In Conversation',
        title: 'Kenya Election 2022 – A Success Story',
        time: 'Tuesday 14th 1600h-1700h',
        overview: 'Technology has been utilized in Kenyan elections to register voters, verify voters on election day, monitor elections in real time and transmit election results. The presentation will delve into the Kenyan 2017 and 2022 General Elections which were presided over by the Speaker. It will explore the lessons learned and challenges faced such as misinformation and disinformation, which has become one of the biggest threats to the development of democracy in today’s world. Despite this, Kenya is a stellar example of how technology can be leveraged in election management to deliver a transparent, accountable and credible democratic process with integrity.',
        speakers: [
            { name: 'Wafula Chebukati', title: 'Former Chairman', organization: 'Independent Electoral and Boundaries Commission (Kenya)' }
        ]
    },
    {
        type: 'Keynote Presentation',
        title: 'Demystifying Electoral Regulations & Procedures',
        time: 'Wednesday 15th 0945h-1045h',
        overview: 'It has been observed that in democratic countries all over the world Electoral rules and procedures have become technologically advanced but their complexity has increased often making them incomprehensible. Demystifying electoral regulations and procedures endeavours to simplify their complexity to make them more accessible and understandable for the stakeholders especially voters. It results in empowering voters and allows candidates to engage more effectively in the democratic process. The rules should essentially serve to ensure that democratic elections run smoothly. They range from voter registration, scheduling elections, qualifications for candidates, fair campaigning, transparent voting, polling locations, independent oversight, diverse electoral systems, results verification, dispute resolution, accessibility, security, and post-election steps. While they may differ by region, at their core, they are expected to uphold democratic principles.',
        speakers: [
            { name: 'Dr. Madhukar Gupta', title: 'State Election Commissioner', organization: 'Election Commission of Rajasthan, India' }
        ]
    },
    {
        type: 'Roundtable',
        title: 'Combating Disinformation: Strategies for Protecting Electoral Integrity',
        time: 'Wednesday 15th 1100h-1200h',
        overview: 'The spread of disinformation poses a significant threat to the integrity of elections and democratic processes. In the age of social media and digital communication, the rapid dissemination of false information can have far-reaching consequences. This panel discussion will focus on strategies and best practices for EMBs to identify, address, and counter disinformation during electoral campaigns. Panelists will share their experiences, discuss the role of various stakeholders, and explore potential solutions for safeguarding the democratic process.',
        speakers: [
            { name: 'Chair & Expert in Electoral Disinformation', title: '' },
            { name: 'Thomas Hicks', title: 'Commissioner', organization: 'U.S. Election Assistance Commission' },
            { name: 'Ingrid Bicu', title: 'Expert in Gender Disinformation' },
            { name: 'Anna Nyqvist', title: 'Chief Executive', organization: 'Swedish Electoral Authority' }
        ]
    },
    {
        type: 'Keynote Presentation',
        title: 'Electoral Backsliding? Election quality worldwide, future threats and how electoral integrity can be protected',
        time: 'Wednesday 15th 1215h-1315h',
        overview: 'This presentation will map out the global landscape of electoral quality.  There have been widespread claims that world has seen democratic backsliding and declining integrity.  Is this true?  As democracies worldwide grapple with emerging threats — from disinformation campaigns to technological vulnerabilities — understanding these challenges becomes paramount. Join us for a comprehensive exploration of contemporary pitfalls, innovative solutions, and strategies to fortify and preserve the sacred process of free and fair elections. This session promises insights into safeguarding our democratic future and ensuring electoral processes remain robust and transparent.',
        speakers: [
            { name: 'Professor Toby James', title: 'Director', organization: 'Electoral Integrity Project' }
        ]
    }
];