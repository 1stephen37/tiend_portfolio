import React from 'react';
import {Button} from '@/components/ui/button';
import {Download, Send} from 'lucide-react';
import {RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine} from 'react-icons/ri';
import DevImage from "@/components/DevImage";
import Badge from "@/components/Badge";
import Socials from "@/components/Socials";

function Hero() {
    return (
        <section className={`py-12 h-[84vh] xl:pt-28 bg-hero bg-no-repeat
             bg-bottom bg-cover dark:bg-none`}>
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className={'flex max-w-[600px] flex-col'}>
                        <div className="text-sm uppercase font-semibold mb-4 text-primary
                        tracking-[4px]">Frontend Developer</div>
                        <h1 className="">Xin chào, tôi là Tiến Điền</h1>
                        <div className="">Tân cử nhân với GPA xuất sắc 9.2 chuyên ngành lập trình Website tại FPT Polytechnic,
                            tôi có kinh nghiệm làm việc nhóm tốt qua các môn học ở trường cũng như tham gia các cuộc thì về lĩnh vực lập trình</div>
                    </div>
                    <div className="">image</div>
                </div>
                <div className="hidden md:flex absolute left-2/4 bottm-44 xl:bottom-12">
                    <RiArrowDownSLine className={'text-3xl text-primary'}/>
                </div>
            </div>
        </section>
    );
}

export default Hero;
