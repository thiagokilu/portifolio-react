import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import ContractedServices from "@/Components/ContractedServices/ContractedServices";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <div className="flex flex-col gap-44">
        <Hero
          greeting={t("hero.greeting")}
          name={t("hero.name")}
          role={t("hero.role")}
          description={t("hero.description")}
          downloadCv={t("hero.downloadCv")}
          scroll={t("hero.scroll")}
        />
        <Skills
          title={t("skills.title")}
          titleHighlight={t("skills.titleHighlight")}
          description={t("skills.description")}
        />
        <About
          title={t("about.title")}
          education={t("about.education")}
          language={t("about.language")}
          description={t("about.description")}
        />
        <Projects title={t("projects.title")} />
        <ContractedServices
          title={t("services.title")}
          titleHighlight={t("services.titleHighlight")}
          webDevelopmentTitle={t("services.webDevelopment.title")}
          webDevelopmentDesc={t("services.webDevelopment.description")}
          uiuxTitle={t("services.uiux.title")}
          uiuxDesc={t("services.uiux.description")}
          interfaceDesignTitle={t("services.interfaceDesign.title")}
          interfaceDesignDesc={t("services.interfaceDesign.description")}
          maintenanceTitle={t("services.maintenance.title")}
          maintenanceDesc={t("services.maintenance.description")}
        />
        <Contact
          title={t("contact.title")}
          description={t("contact.description")}
          nameLabel={t("contact.nameLabel")}
          emailLabel={t("contact.emailLabel")}
          messageLabel={t("contact.messageLabel")}
          nameError={t("contact.nameError")}
          emailError={t("contact.emailError")}
          messageError={t("contact.messageError")}
          sending={t("contact.sending")}
          send={t("contact.send")}
          success={t("contact.success")}
        />
        <Footer
          copyright={t("footer.copyright", { year: new Date().getFullYear() })}
        />
      </div>
    </main>
  );
}
