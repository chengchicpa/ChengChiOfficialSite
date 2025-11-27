import heroBg from '../assets/hero-bg.png';
import team1 from '../assets/team-1.png';
import team2 from '../assets/team-2.png';
import team3 from '../assets/team-3.png';
import service1 from '../assets/service-1.png';
import service2 from '../assets/service-2.png';
import service3 from '../assets/service-3.png';
import service4 from '../assets/service-1.png'; 
import logoHorizon from '../assets/logo-horizon.svg';
import logoSquareWhite from '../assets/logo-square-white.svg';

export const companyInfo = {
    name: "丞起聯合會計師事務所",
    logoHorizon: logoHorizon,
    logoSquareWhite: logoSquareWhite,
    logoText: "CC",
    est: "EST. 2025",
    address: "104695 台北市中山區松江路 71 號 4 樓",
    tel: "02-25080750",
    fax: "02-25080695",
    email: "",
    taxId: ""
};

export const navLinks = [
    { name: "事務所簡介", href: "./about.html" },
    { name: "專業諮詢", href: "./index.html#professionals" },
    { name: "服務項目", href: "./index.html#services" }
];

export const heroData = {
    bgImage: heroBg,
    title: "丞心創新，起勢未來",
    subtitle: "以高端專業與新世代思維，成為中小企業最值得信賴的成長夥伴"
};

export const sloganData = {
    title: "以專業築信任，以信任成價值",
    items: [
        { title: "專業深度", desc: "融合大型事務所之國際標準與豐富實務經驗，提供企業決策層最可信賴的專業建議。" },
        { title: "策略洞見", desc: "不止於稅務與財務，我們從產業結構與經營現況出發，協助企業掌握市場脈動，提前佈局。" },
        { title: "誠信信任", desc: "堅守獨立與客觀原則，長期以誠信與穩健的專業形象，贏得客戶信任。" },
        { title: "靈活服務", desc: "以專業為本、以需求為導向，提供高效率、精準且具延展性的顧問解決方案。" }
    ]
};

export const aboutData = {
    title: "關於我們",
    subtitle: "專業×實務×信任，<br>為企業財務與稅務決策保駕護航。",
    desc1: "三位來自國際四大會計師事務所組成的會計師團隊，結合大型事務所經驗與財稅規劃專業，提供量身打造、最貼近企業需求的建議。",
    desc2: "丞起的核心理念是「以專業啟動價值，以洞見成就長遠」。<br>我們相信，真正的專業不僅是技術的展現，更在於理解企業的本質與發展脈絡，從數字背後看見策略，從合規之中創造價值。"
};

export const aboutPageData = {
    intro: {
        title: "事務所簡介",
        content: [
            "丞起聯合會計師事務所由廖慧慈會計師及張竹淵會計師共同創立。",
            "兩位創辦人皆具備勤業、資誠等國際四大會計師事務所十年以上之專業經驗，秉持一致的專業信念與服務理念，以國際級的專業實力，結合對在地產業脈動的深刻理解，致力為企業提供具前瞻性與整合性的專業顧問服務。",
            "我們結合大型事務所的專業深度與精準分析能力，洞悉產業運作與企業治理的實務挑戰，從財務、稅務到整體營運策略，提供高層決策所需的專業判斷與策略建議。丞起以嚴謹、誠信與專業為核心，協助客戶在競爭激烈的市場環境中穩健前行，創造持續的企業價值。",
            "在丞起，我們不僅提供解方，更提供洞見。"
        ]
    },
    philosophy: {
        title: "品牌理念",
        subtitle: "丞起的核心理念是「以專業啟動價值，以洞見成就長遠」。",
        content: [
            "我們相信，真正的專業不僅是技術的展現，更在於理解企業的本質與發展脈絡，從數字背後看見策略，從合規之中創造價值。",
            "我們以嚴謹的專業態度、誠信的服務精神與獨立的專業判斷，協助客戶在變動的市場中維持穩健，於挑戰中看見機會，並在策略布局上「丞勢而起」，共創長遠發展。"
        ]
    },
    contact: {
        title: "聯絡我們",
        transport: {
            mrt: "松江南京站 4 號出口－步行時間約2分鐘",
            parking: [
                "和雲台北松江路停車場－步行約 2 分鐘",
                "嘟嘟房停車場 (建國高架站)－步行約 4 分鐘"
            ],
            bus: [
                "長安松江路口站－步行約 2 分鐘",
                "長安東路二段站－步行約 1 分鐘"
            ]
        }
    }
};

export const teamData = [
    {
        id: "liao-yi-ci",
        name: "廖憶慈",
        role: "會計師",
        image: team2,
        education: [
            "英國南安普敦大學科學及財務管理研究所",
            "私立東吳大學會計系",
            "國立台北商業大學國貿科"
        ],
        qualifications: [
            "中華民國高考會計師及格",
            "企業評價師 / 中華無形資產暨企業評價協會 CABIAV 認證合格"
        ],
        experience: [
            "丞起聯合會計師事務所合夥人",
            "信閎聯合會計師事務所合夥人",
            "台北市會計師公會稅制委員會委員",
            "世新大學財務金融學系講師",
            "資誠聯合會計師事務所國際事業部協理",
            "勤業眾信聯合會計師事務所審計部經理"
        ],
        specialization: [
            "中小企業稅務規劃",
            "中小企業主個人稅規劃",
            "境外公司稅務規劃",
            "股權結構規劃",
            "輔導客戶辦理公開發行",
            "內控制度之遵循測試",
            "特殊目的報告查核"
        ]
    },
    {
        id: "zhang-zhu-yuan",
        name: "張竹淵",
        role: "會計師",
        image: team3,
        education: [
            "中興大學會計研究所",
            "淡江大學會計系"
        ],
        qualifications: [
            "中華民國高考會計師及格"
        ],
        experience: [
            "丞起聯合會計師事務所合夥人",
            "外商亞洲區財務總監",
            "資誠聯合會計師事務所國際事業部協理"
        ],
        specialization: [
            "中小企業稅務規劃",
            "境外公司稅務規劃",
            "企業帳務整併和流程改善",
            "股權結構規劃",
            "輔導客戶辦理公開發行",
            "內控制度之遵循測試",
            "特殊目的報告查核"
        ]
    },
    {
        id: "lu-wen-cong",
        name: "盧文聰",
        role: "總顧問",
        image: team1,
        education: [
            "台灣大學商學研究所碩士",
            "東吳大學法律研究科技法律組"
        ],
        qualifications: [
            "中華民國高考會計師及格"
        ],
        experience: [
            "丞起聯合會計師事務所合夥人",
            "資誠聯合會計師事務所合夥人",
            "台灣企業重建協會資產評價委員會委員",
            "台灣證券交易所 XBRL 委員會委員",
            "跨境創新創業交流協會理事長"
        ],
        specialization: [
            "金融業之風險管理(Basel II)",
            "內部控制制度設計及覆核",
            "營運及流程效率之改善",
            "財務功能諮詢"
        ]
    }
];

export const servicesData = [
    { title: "工商登記帳務服務", desc: "在台公司設立規劃、工商登記服務、外僑投資諮詢、帳務處理、帳務輔導、薪資委外、外僑個人所得稅、贈與稅及遺產稅申報等相關服務。", image: service1 },
    { title: "審計服務及確信服務", desc: "財務報表之查核簽證、營利事業所得稅結算申報查核簽證、特殊目的查核服務以及 政府專案查核。", image: service2 },
    { title: "稅務規劃", desc: "企業、個人、以及境內外稅務整體規劃方案。", image: service3 },
    {
        title: "法律服務",
        desc: `
            <a href="https://www.masterylawcy.com.tw/" target="_blank">辰勝法律事務所</a>專長：
            <ol>
                <li>勞資糾紛解決與管理。</li>
                <li>企業法律顧問、股東權益執行。</li>
                <li>契約擬定與校正。</li>
                <li>民、刑事訴訟案件。</li>
                <li>家族傳承規劃與遺產分割處理。</li>
            </ol>
        `,
        image: service4
    }
];
