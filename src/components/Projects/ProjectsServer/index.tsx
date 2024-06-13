import pick from 'lodash/pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ProjectsClient } from '../ProjectsClient';

export const ProjectsServer = () => {
    const messages = useMessages();

    return (
        <NextIntlClientProvider
            messages={pick(messages, [
                "ProjectsSection.title",
                "ProjectsSection.description",
                "ProjectsSection.cardDetailsTitle",
                "ProjectsSection.cardLanguagesTitle",
                "ProjectsSection.featuresTitle",
                "ProjectsSection.technologiesTitle",
                "ProjectsSection.FutureTechDesc",
                "ProjectsSection.FutureTechFeat",
                "ProjectsSection.ShopiDesc",
                "ProjectsSection.ShopiFeat",
                "ProjectsSection.ReduxPokedexDesc",
                "ProjectsSection.ReduxPokedexFeat",
                "ProjectsSection.ToDoMachineDesc",
                "ProjectsSection.ToDoMachineFeat",
                "ProjectsSection.errorText"
            ])}
        >
            <ProjectsClient />
        </NextIntlClientProvider>
    );
}