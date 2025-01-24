export interface ICoverPage {
    report_title: string;
    report_subtitle: string;
    client_logo_url?: string | null;
    project_profile_url: string;
    project_title: string;
    project_details?: null | {
        Architect: string
        "Start Date": string;
        "Est Duration": string
    }
}

export interface ISummaryPage {
    main_header: {
        report_title: string;
        report_subtitle: string;
        client_logo_url?: string | null;
    },
    project_banner?: null | {
        project_profile_url: string;
        project_title: string;
        project_details?: null | {
            Architect: string;
            "Start Date": string;
            "Est Duration": string;
        }
    },
    sections: any[]

}

export interface IReport {
    cover_page?: ICoverPage;
    summary_page?: ISummaryPage;
}