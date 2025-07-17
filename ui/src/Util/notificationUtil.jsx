import NotificationToast from "../Components/Common/NotificationToast";

export const showSuccessToast = (description) => {
    NotificationToast('success', 'Success', description);
};

export const showWarningToast = (description) => {
    NotificationToast('warning', 'Warning', description);
};

export const showInfoToast = (description) => {
    NotificationToast('info', 'Info', description);
};

export const showErrorToast = (description) => {
    NotificationToast('error', 'Error', description);
};
