'use client'

type BannerProps = {
    buttonText: string;
    handleOnClick: () => void;
}


export const Banner = ({ buttonText, handleOnClick }: BannerProps) => {

    return (
        <div>
            <h1><span>
                Coffee
            </span>
                <span>
                    Connoisseur
                </span>
            </h1>
            <p>
                Discover your local coffee shops!
            </p>
            <div onClick={handleOnClick}>
                <button>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}
