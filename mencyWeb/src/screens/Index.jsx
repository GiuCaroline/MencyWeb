import { NavHome } from "../components/navHome";
import { ArrowDownIcon, ChartPieSliceIcon, BankIcon, TargetIcon, ChartBarIcon, ShieldCheckIcon, LockKeyIcon, ShieldIcon, RocketLaunchIcon, ArrowRightIcon } from "@phosphor-icons/react"

export default function Index() {
    return (
        <main className="min-h-screen w-full bg-[#FAFAFA] font-poppins">
            <NavHome />

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

                    <a href='#comecar' className="cursor-pointer flex items-center justify-center gap-2 bg-[#C19000] text-white py-3 px-6 rounded-xl text-[18px] mt-[2%] transition duration-300 hover:scale-105">Conheça o Mency <ArrowDownIcon size={28} /></a>

                    <div className="h-[3px] w-full rounded-full bg-[#E2E2E2] mt-[3%]" />
                    <div className="h-3 w-3 rounded-full bg-[#C19000] mt-[-0.5%]" />
                </div>

                <div className="w-full flex flex-col justify-center items-center mt-[2%]">
                    
                    <p className="text-black max-w-sm text-[24px] text-center font-semibold cursor-default">Tudo o que você precisa para cuidar do seu dinheiro</p>

                    <div className="mt-[2%] flex gap-5">
                        <div className="flex flex-col bg-[#FAFAFA] shadow-lg rounded-2xl p-5 justify-center items-center transition duration-300 hover:scale-102">
                            <ChartPieSliceIcon size={85} color="#C19000" weight="light" />
                            <p className="text-black max-w-sm text-[20px] text-center font-semibold cursor-default mt-[5%]">Controle de gastos</p>
                            <p className="text-[#696969] max-w-3xs text-[17px] mt-[5%] text-center cursor-default">Saiba exatamente para onde seu dinheiro está indo e categorize seus gastos automaticamente.</p>
                        </div>

                        <div className="flex flex-col bg-[#FAFAFA] shadow-lg rounded-2xl p-5 justify-center items-center transition duration-300 hover:scale-102">
                            <BankIcon size={85} color="#C19000" weight="light" />
                            <p className="text-black max-w-sm text-[20px] text-center font-semibold cursor-default mt-[5%]">Contas conectdas</p>
                            <p className="text-[#696969] max-w-3xs text-[17px] mt-[5%] text-center cursor-default">Conecte suas contas via Open Finance e tenha todas elas em um único lugar, de forma segura.</p>
                        </div>

                        <div className="flex flex-col bg-[#FAFAFA] shadow-lg rounded-2xl p-5 justify-center items-center transition duration-300 hover:scale-102">
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

            <section id='comecar' className="scroll-mt-20 w-full bg-[#F3F3F3] mt-16 py-8 px-8 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
                    <div className="w-full lg:w-[30%] min-w-0">
                        <p className="text-black max-w-xs text-[24px] font-semibold cursor-default">
                            Veja sua vida financeira de outro jeito
                        </p>

                        <div className="h-[3px] w-15 rounded-full bg-[#C19000] mt-4" />

                        <p className="text-black max-w-xs text-[18px] mt-4 cursor-default text-base/11">
                            Tenha uma visão completa das suas finanças em um
                            painel simples, moderno e intuitivo.
                        </p>
                    </div>

                    <img
                        className="h-auto w-full lg:w-[65%] object-contain shadow-xl rounded-xl"
                        src="/images/imageExemplo.png"
                        alt="Dashboard principal"
                    />
                </div>
            </section>

            <section className="flex flex-col items-center px-6 py-12">
                <h2 className="text-center text-[24px] font-semibold cursor-default">Como o Mency funciona?</h2>

                <div className="mt-4 h-[3px] w-30 rounded-full bg-[#C19000]" />

                <div className="mt-8 grid w-full max-w-6xl grid-cols-1 gap-y-10 md:grid-cols-[1fr_100px_1fr_100px_1fr] lg:grid-cols-[1fr_150px_1fr_150px_1fr]">
                
                    <div className="flex min-w-0 flex-col items-center text-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C19000] text-[18px] text-white cursor-default">
                            01
                        </div>

                        <div className="mt-4 flex h-40 w-40 items-center justify-center rounded-full border-4 border-[#E2E2E2]">
                            <BankIcon size={110} color="#C19000" weight="light" />
                        </div>

                        <h3 className="mt-4 text-[18px] font-semibold cursor-default">Conecte suas contas</h3>

                        <p className="mt-4 max-w-xs text-[16px] cursor-default">Conecte suas contas bancárias de forma segura através do Open Finance.
                        </p>
                    </div>

                    <LinhaAnimada />

                    <div className="flex min-w-0 flex-col items-center text-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C19000] text-[18px] text-white cursor-default">
                            02
                        </div>

                        <div className="mt-4 flex h-40 w-40 items-center justify-center rounded-full border-4 border-[#E2E2E2]">
                            <ChartBarIcon size={110} color="#C19000" weight="light" />
                        </div>

                        <h3 className="mt-4 text-[18px] font-semibold cursor-default">Acompanhe seus gastos</h3>

                        <p className="mt-4 max-w-xs text-[16px] cursor-default">Veja suas movimentações automaticamente categorizadas e organizadas para você.</p>
                    </div>

                    <LinhaAnimada segunda />

                    <div className="flex min-w-0 flex-col items-center text-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C19000] text-[18px] text-white cursor-default">
                            03
                        </div>

                        <div className="mt-4 flex h-40 w-40 items-center justify-center rounded-full border-4 border-[#E2E2E2]">
                            <ChartPieSliceIcon
                                size={110}
                                color="#C19000"
                                weight="light"
                            />
                        </div>

                        <h3 className="mt-4 text-[18px] font-semibold cursor-default">Entenda seus hábitos</h3>

                        <p className="mt-4 max-w-xs text-[16px] cursor-default">Tenha uma visão clara da sua vida financeira e tome melhores decisões para o seu futuro.</p>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#F3F3F3] mt-16 pb-20 py-8 px-8 lg:px-24">
                <div className="flex flex-col justify-center items-center">

                    <p className="text-center text-[24px] font-semibold cursor-default">Seus dados em primeiro lugar</p>

                    <div className="mt-4 h-[3px] w-30 rounded-full bg-[#C19000]" />

                    <div className="mt-[2%] flex flex-row gap-4">
                        <div className="flex flex-row items-center justify-center gap-3">
                            <ShieldCheckIcon size={95} color="#C19000" weight="light" />
                            <div>
                                <p className="text-left text-[20px] font-semibold cursor-default">Conexão segura</p>
                                <p className="text-left text-[16px] cursor-default max-w-xs mt-[2%]">Seus dados financeiros são tratados com segurança e privacidade, utilizando criptografia de ponta a ponta.</p>
                            </div>
                        </div>

                        <div className="mt-4 h-30 w-[3px] rounded-full bg-[#E2E2E2]" />

                        <div className="flex flex-row items-center justify-center gap-3">
                            <LockKeyIcon size={95} color="#C19000" weight="light" />
                            <div>
                                <p className="text-left text-[20px] font-semibold cursor-default">Você continua no controle</p>
                                <p className="text-left text-[16px] cursor-default max-w-xs mt-[2%]">O acesso às suas informações depende da sua autorização. Você decido o que compartilhar e quando.</p>
                            </div>
                        </div>

                        <div className="mt-4 h-30 w-[3px] rounded-full bg-[#E2E2E2]" />

                        <div className="flex flex-row items-center justify-center gap-3">
                            <ShieldIcon size={95} color="#C19000" weight="light" />
                            <div>
                                <p className="text-left text-[20px] font-semibold cursor-default">Transparência</p>
                                <p className="text-left text-[16px] cursor-default max-w-xs mt-[2%]">Você sabe quais informações estão sendo utilizadas pelo Mency, com total transparência e clareza.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="w-full bg-[#C19000] py-8 px-8 lg:px-24 mt-[-25px] rounded-t-3xl justify-center items-center flex flex-col">
                <RocketLaunchIcon size={110} color="#FFFFFF" weight="light" />

                <p className="text-center text-[30px] font-semibold text-white cursor-default mt-[2%] max-w-md">Pronto para cuidar melhor do seu dinheiro?</p>
                <p className="text-left text-white text-[18px] cursor-default mt-[1%]">Comece a organizar sua vida financeira com o Mency.</p>

                <button className="cursor-pointer flex items-center justify-center gap-2 bg-white text-[#C19000] py-3 px-6 rounded-xl text-[18px] mt-[2%] transition duration-300 hover:scale-105">Começar agora <ArrowRightIcon size={28} /></button>
            </section>
        </main>
    );
}

function LinhaAnimada({ segunda = false }) {
    return (
        <div
            className={`linha-passos ${segunda ? "linha-passos--segunda" : ""}`}
            aria-hidden="true"
        >
            {[0, 1].map((bolinha) => (
                <span
                    key={bolinha}
                    className="bolinha-passos"
                    style={{ "--atraso": `${bolinha * 0.18}s` }}
                />
            ))}
        </div>
    );
}