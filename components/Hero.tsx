import React from 'react';
import {Button} from '@/components/ui/button';
import {Download, Send} from 'lucide-react';
import {RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine} from 'react-icons/ri';
import DevImage from "@/components/DevImage";
import Badge from "@/components/Badge";
import Socials from "@/components/Socials";
import Link from "next/link";

function Hero() {
    return (
        <section className={`py-12 h-[84vh] xl:pt-28 bg-hero bg-no-repeat
             bg-bottom bg-cover dark:bg-none`}>
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div
                        className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary
                        tracking-[4px]">
                            Frontend Developer
                        </div>
                        <h1 className="h1 mb-4">Xin chào, tôi là Stephen Nguyễn</h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Tân cử nhân với GPA xuất sắc 9.2 chuyên
                            ngành lập trình Website tại FPT
                            Polytechnic,
                            tôi có kinh nghiệm làm việc nhóm tốt qua các môn học ở trường cũng như tham gia các cuộc thì
                            về lĩnh vực lập trình
                        </p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href={"/contact"}>
                                <Button className={'gap-x-2'}>Liên hệ tôi<Send size={18}/></Button>
                            </Link>
                            <Button variant={'secondary'} className={'gap-x-2'}>Tải CV<Download size={18}/></Button>
                        </div>
                        <Socials containerStyles={'flex gap-x-6 mx-auto xl:mx-0 '} iconsStyle={`text-foreground text-22 
                        hover:text-primary transition-all `}/>
                    </div>
                    <div className="hidden xl:flex relative">
                        <Badge containerStyles={'absolute top-[24%] -left-[5rem] capitalize'} icon={<RiBriefcase4Fill/>} endCountNum={1}
                               badgeText={`Năm Kinh Nghiệm`} />
                        <Badge containerStyles={'absolute top-[80%] -left-[1rem] capitalize'} icon={<RiTodoFill/>} endCountNum={5}
                               badgeText={`Dự án hoàn thành`} endCountText={''} />
                        <Badge containerStyles={'absolute top-[55%] -right-8 capitalize'} icon={<RiTeamFill/>} endCountNum={2}
                               badgeText={`Giải thưởng`} endCountText={''} />
                        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark
                        w-max h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                        <DevImage containerStyles={`bg-hero_shape w-[510px] h-[462px] bg-no-repeat 
                        relative bg-bottom `} imgSrc={`/images/hero/developer.png`}/>
                    </div>
                </div>
                <div className="hidden md:flex xl:mt cursor-pointer-0 md:mt-[2rem] absolute left-2/4 bottm-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className={'text-3xl text-primary'}/>
                </div>
            </div>
        </section>
    );
}

export default Hero;
