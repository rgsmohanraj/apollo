import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { breadcrumbConfig } from '../Config/breadcrumbConfig';
import config from "bootstrap/js/src/util/config";
const useBreadcrumb = () => {
    const location = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    const replaceParentsWithObjects = (configObject) => {
        const updatedConfig = { ...configObject };

        if (configObject.parents && configObject.parents.length > 0) {
            updatedConfig.parents = configObject.parents.map(parentKey => breadcrumbConfig[parentKey]);
        }

        return updatedConfig;
    };

    useEffect(() => {
        Object.keys(breadcrumbConfig).forEach((configKey) => {
            if (location.pathname.startsWith(breadcrumbConfig[configKey].url)) {
                if (breadcrumbConfig[configKey].parents && breadcrumbConfig[configKey].parents.length > 0) {
                    setBreadcrumbs(replaceParentsWithObjects(breadcrumbConfig[configKey]));
                } else {
                    setBreadcrumbs([breadcrumbConfig[configKey]]);
                }
            }
        });
    }, [location.pathname]);

    return breadcrumbs;
};

export default useBreadcrumb;