import React from 'react';
import DevImage from "./DevImage"
import Image from "next/image"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, BriefcaseIcon} from "lucide-react"

const informationData = [
    {
        icon: <User2 size={20}/>,
        text: 'Stephen Nguyễn'
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '+0338 015 137'
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'stephennguyendev97@gmail.com'
    },
    {
        icon: <Calendar size={20}/>,
        text: 'Sinh ngày 9, tháng 7, 2004'
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Web development'
    },
    {
        icon: <HomeIcon size={20}/>,
        text: 'Phường 12, Quận 6, thành phố Hồ Chí Minh'
    },
]

const qualificationData = [
    {
        title: 'học vấn',
        data: [
            {
                university: "FPT Polytechnic",
                qualification: 'Cử nhân xuất sắc',
                years: "2022 - 2025"
            },
            {
                university: "FPT Polytechnic",
                qualification: 'Cử nhân xuất sắc',
                years: "2022 - 2025"
            },
            {
                university: "FPT Polytechnic",
                qualification: 'Cử nhân xuất sắc',
                years: "2022 - 2025"
            }
        ]
    },
    {
        title: 'kinh nghiệm',
        data: [
            {
                university: "ABC Inc.",
                qualification: 'Software Engineer',
                years: "2018 - 2020"
            },
            {
                university: "ABC Inc.",
                qualification: 'Software Engineer',
                years: "2018 - 2020"
            },
            {
                university: "ABC Inc.",
                qualification: 'Software Engineer',
                years: "2018 - 2020"
            },
        ]
    }
]

const skillData = [
    {
        title: "skills",
        data: [
            {
                name : "HTML, CSS"
            },
            {
                name : "Front-end Development"
            },
            {
                name : "JavaScript, PHP"
            },
            {
                name : "Back-end Development"
            }
        ]
    },
    {
        title: "tools",
        data: [
            {
                imgPath : "/images/about/vscode.svg"
            },
            {
                imgPath : "/images/about/figma.svg"
            },
            {
                imgPath : "/images/about/notion.svg"
            },
            {
                imgPath : "/images/about/wordpress.svg"
            }
        ]
    }
]

function About() {
    const getData = (array : any[], title : string) => {
        return array.find((item) => item.title === title)
    }
    console.log(getData(qualificationData, 'học vấn'))
    return (
        <section className={'xl:h-[860px] pb-12 xl:py-24'}>
            <div className="container mx-auto ">
                <h2 className={'section-title mb-8 xl:mb-16 text-center mx-auto'}>About me</h2>
                <div className="flex flex-col xl:flex-row ">
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImage containerStyles={`bg-about_shape_light dark:bg-about_shape_dark
                         w-[505px] h-[505px] bg-no-repeat relative`} imgSrc={'/images/about/developer.png'} />
                    </div>
                    <div className="flex-1">
                        <Tabs defaultValue={'personal'}>
                            <TabsList className={`'w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border 
                            dark:border:none`}>
                                <TabsTrigger className={'capitalize w-[162px] xl:w-auto'} name={''} value={'personal'}>
                                    Thông tin cá nhân
                                </TabsTrigger>
                                <TabsTrigger className={'capitalize w-[162px] xl:w-auto'} name={''} value={'qualifications'}>
                                    Bằng cấp
                                </TabsTrigger>
                                <TabsTrigger className={'capitalize w-[162px] xl:w-auto'} name={''} value={'skills'}>
                                    Kĩ năng
                                </TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value={'personal'}>
                                    <div className="">
                                        <h3 className=""></h3>
                                    </div>
                                </TabsContent>
                                <TabsContent value={'qualifications'}>
                                    qualifications infor
                                </TabsContent>
                                <TabsContent value={'skills'}>
                                    skills infor
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
