export const SocialButton = ({ styles, iconClasses, buttonText, onClick  }) => (
    <div className={styles} onClick={onClick}>
            <button type="button" className="button">
                 <i className={iconClasses} />
                 <span>{buttonText}</span>
            </button>
    </div>
);