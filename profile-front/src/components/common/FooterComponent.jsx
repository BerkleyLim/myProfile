import React from 'react'
import styles from "./../../App.module.scss";

export default function FooterComponent() {
    return (
        <div className={`${styles?.footer}`}>
            <div className={`${styles?.ftContent}`}>
                <div className={`${styles?.ftService}`}>
                    <div>Github : <a href="https://github.com/glidong.hong">https://github.com/glidong.hong</a></div>
                    <div>E-Mail : <a href="mailto:gildong.hong@gmail.com">gildong.hong@gmail.com</a></div>
                    <div>Kakao : <a href="https://open.kakao.com/me/glidong.hong">https://open.kakao.com/me/glidong.hong</a></div>
                    <div>blog : <a href="https://open.kakao.com/me/glidong.hong">https://open.kakao.com/me/glidong.hong</a></div>
                    <div>LinkedIn : <a href="https://www.linkedin.com/in/glidong.hong/">https://www.linkedin.com/in/glidong.hong/</a></div>
                </div>
                <span className={`${styles?.ftCopy}`}>Copyright (c) 2023 CleanWare, Ltd, All Rights Reserved</span>
            </div>
        </div>  
        // <div className={`${styles?.footer}`}>
        //     <div className={`${styles?.ftContent}`}>
        //         <div className={`${styles?.ftService}`}>
        //             <div>Github : <a href="https://github.com/BerkleyLim">https://github.com/BerkleyLim</a></div>
        //             <div>E-Mail : <a href="mailto:berkleylim16@gmail.com">berkleylim16@gmail.com</a></div>
        //             <div>Kakao : <a href="https://open.kakao.com/me/prgberkley">https://open.kakao.com/me/prgberkley</a></div>
        //             <div>blog : <a href="https://open.kakao.com/me/prgberkley">https://open.kakao.com/me/prgberkley</a></div>
        //             <div>LinkedIn : <a href="https://www.linkedin.com/in/berkley-lim-3aa551270/">https://www.linkedin.com/in/berkley-lim-3aa551270/</a></div>
        //         </div>
        //         <span className={`${styles?.ftCopy}`}>Copyright (c) 2023 CleanWare, Ltd, All Rights Reserved</span>
        //     </div>
        // </div>  
    )  
}


