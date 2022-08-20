import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation()
    return <>
        <footer className="footer">
            <div className="container">
                <div className="footer_body">
                    <p className="mb-0">
                        {t('  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis possimus suscipit nobis iusto, libero aliquam.')}
                    </p>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;