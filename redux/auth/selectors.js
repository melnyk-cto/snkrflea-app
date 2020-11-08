export const showRegisterModal = state => state.auth.registerModalShowing;
export const showLoginModal = state => state.auth.loginModalShowing;
export const showPremiumPaymentModal = state => state.auth.premiumPaymentModalShowing;
export const showPlansModal = state => state.auth.plansModalShowing;
export const showRegisterPremiumModal = state => state.auth.registerPremiumModalShowing;
export const showContactModal = state => state.auth.contactModalShowing;
export const showReportModal = state => state.auth.reportModalShowing;
export const showCreateStoreModal = state => state.auth.createStoreModalShowing;
export const getUserState = state => state.auth.user;
export const getAuthorizedErrorState = state => state.auth.unauthorizedError;
export const getAuthAlreadyErrorState = state => state.auth.alreadyError;
