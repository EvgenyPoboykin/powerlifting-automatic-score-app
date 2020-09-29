export interface IAthlete {
    id: string;
    firstName: string;
    lastName: string;
    gender_label: string;
    gender_value: string;
    bornYear: number;
    selfWeight: number;
    country: string;
    city: string;
    coach: string;
    team: string;
    sq_weight_1: number;
    sq_weight_2: number;
    sq_weight_3: number;
    sq_weight_4: number;
    sq_weight_5: number;
    bp_weight_1: number;
    bp_weight_2: number;
    bp_weight_3: number;
    bp_weight_4: number;
    bp_weight_5: number;
    dl_weight_1: number;
    dl_weight_2: number;
    dl_weight_3: number;
    dl_weight_4: number;
    dl_weight_5: number;
    personal_result_sq: number;
    personal_result_bp: number;
    personal_result_dl: number;
    abs_weight: number;
    abs_result: number;
}

export interface IEventTemplate {
    event: string;
    id: string;
    date: any;
    athletesList: IAthlete[] | [];
    label: string;
    value: string;
    four: boolean;
    five: boolean;
    setFourBtnActive: boolean;
    setFiveBtnActive: boolean;
    disFourBtn: boolean;
    disFiveBtn: boolean;
    disDelBtn: boolean;
    sq: boolean;
    bp: boolean;
    dl: boolean;
    pss: boolean;
    gsl: boolean;
    ts: boolean;
    title: boolean;
    card: number;
}

export interface ISettings {
    lang: boolean;
    start: boolean;
    tournament: boolean;
    form: boolean;
    dialog: boolean;
}

export interface ILanguage {
    event_name: string;
    create_event: string;
    add_athlete: string;
    save_as: string;
    delete_btn: string;
    standard: string;
    pro: string;
    list: string;
    result: string;
    form: {
        cancel: string;
        save_changes: string;
        save_add: string;
        first_name: string;
        last_name: string;
        country: string;
        city: string;
        coach: string;
        team: string;
        gender_male: string;
        gender_female: string;
        squat: string;
        bench_press: string;
        dead_lift: string;
    };
}
