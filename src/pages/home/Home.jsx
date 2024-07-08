import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="min-h-[calc(100vh-56px)] flex items-center justify-center bg-[#F4F8FA]">
                <h1 className="text-9xl font-body">{t('home-title')}</h1>
            </div>
        </>
    )
}

export default Home