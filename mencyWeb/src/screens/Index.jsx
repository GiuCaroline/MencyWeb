import { Nav } from "../components/nav";
import { ArrowDownIcon, ChartPieSliceIcon, BankIcon, TargetIcon, ChartBarIcon } from "@phosphor-icons/react"

export default function Index() {
    return (
        <main className="min-h-screen w-full bg-[#FAFAFA] font-poppins">
            <Nav />

            <section className="h-dvh w-full overflow-hidden rounded-b-3xl bg-[#C19000] pt-20 px-23 shadow-lg">
                <div className="grid h-full grid-cols-2 items-center">
                    <div className="flex flex-col justify-center gap-8 pl-8 pr-4 lg:pl-16 xl:pl-24">
                        <div className="flex items-center gap-5">
                            <div className="flex shrink-0 flex-col items-center gap-5">
                                <img
                                    className="w-24 lg:w-32 xl:w-40"
                                    src="/images/logobranca.png"
                                    alt="Logo Mency"
                                />

                                <div className="h-[4px] w-3/4 rounded-full bg-white" />
                            </div>

                            <h1 className="text-5xl font-medium text-white lg:text-7xl xl:text-8xl cursor-default">
                                Mency
                            </h1>
                        </div>

                        <p className="max-w-base leading-relaxed text-white text-[18px] ml-[2%] cursor-default">
                            O Mency é um aplicativo multiplataforma de controle 
                            financeiro pessoal, desenvolvido para facilitar a
                            organização de receitas, despesas e transações.
                            <br/>
                            Com integração ao Open Finance através da Pluggy,
                            você pode consultar suas informações bancárias de
                            forma prática e automatizada.
                        </p>
                    </div>

                    <div className="flex h-full min-h-0 items-end justify-end">
                        <img
                            className="block h-full w-full object-contain object-right-bottom"
                            src="/images/pessoaBanner.png"
                            alt="Pessoa"
                        />
                    </div>
                </div>
            </section>

            <section className="p-8 flex flex-col justify-center items-center">
                <div className="w-full flex flex-col justify-center items-center">
                    <p className="text-[#C19000] underline text-[35px] font-semibold cursor-default">Open Finance</p>
                    <p className="text-black font-bold max-w-lg text-[22px] mt-[2%] text-center cursor-default">Suas contas - Seus gastos - Seu dinheiro Tudo em um só lugar.</p>
                    <p className="text-black max-w-xl text-[18px] mt-[1%] text-center cursor-default">Conecte suas contas bancárias de forma segura e acompanhe sua vida financeira automaticamente.</p>

                    <button className="cursor-pointer flex items-center justify-center gap-2 bg-[#C19000] text-white py-3 px-6 rounded-xl text-[18px] mt-[2%] transition duration-300 hover:scale-105">Conheça o Mency <ArrowDownIcon size={28} /></button>

                    <div className="h-[3px] w-full rounded-full bg-[#C8C8C8] mt-[3%]" />
                    <div className="h-3 w-3 rounded-full bg-[#C19000] mt-[-0.5%]" />
                </div>
                <div className="w-full flex flex-col justify-center items-center mt-[2%]">
                    
                    <p className="text-black max-w-sm text-[24px] text-center font-semibold cursor-default">Tudo o que você precisa para cuidar do seu dinheiro</p>

                    <div className="mt-[2%] flex gap-5">
                        <div className="flex flex-col bg-[#FAFAFA] shadow-lg rounded-xl p-5 justify-center items-center transition duration-300 hover:scale-102">
                            <ChartPieSliceIcon size={85} color="#C19000" weight="light" />
                            <p className="text-black max-w-sm text-[20px] text-center font-semibold cursor-default mt-[5%]">Controle de gastos</p>
                            <p className="text-[#696969] max-w-3xs text-[17px] mt-[5%] text-center cursor-default">Saiba exatamente para onde seu dinheiro está indo e categorize seus gastos automaticamente.</p>
                        </div>

                        <div className="flex flex-col bg-[#FAFAFA] shadow-lg rounded-xl p-5 justify-center items-center transition duration-300 hover:scale-102">
                            <BankIcon size={85} color="#C19000" weight="light" />
                            <p className="text-black max-w-sm text-[20px] text-center font-semibold cursor-default mt-[5%]">Contas conectdas</p>
                            <p className="text-[#696969] max-w-3xs text-[17px] mt-[5%] text-center cursor-default">Conecte suas contas via Open Finance e tenha todas elas em um único lugar, de forma segura.</p>
                        </div>

                        <div className="flex flex-col bg-[#FAFAFA] shadow-lg rounded-xl p-5 justify-center items-center transition duration-300 hover:scale-102">
                            <TargetIcon size={85} color="#C19000" weight="light" />
                            <p className="text-black max-w-sm text-[20px] text-center font-semibold cursor-default mt-[5%]">Metas financeiras</p>
                            <p className="text-[#696969] max-w-3xs text-[17px] mt-[5%] text-center cursor-default">Defina objetivos, crie metas e acompanhe seu progresso para conquistar o que realmente importa.</p>
                        </div>

                        <div className="flex flex-col bg-[#FAFAFA] shadow-lg rounded-2xl p-5 justify-center items-center transition duration-300 hover:scale-102">
                            <ChartBarIcon size={85} color="#C19000" weight="light" />
                            <p className="text-black max-w-sm text-[20px] text-center font-semibold cursor-default mt-[5%]">Visão financeira</p>
                            <p className="text-[#696969] max-w-3xs text-[17px] mt-[5%] text-center cursor-default">Entenda sua vida financeira através de gráficos intuitivos e idicadores claros e completos.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}