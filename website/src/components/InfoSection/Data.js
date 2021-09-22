import img1 from '../../images/img-1.svg'
import img2 from '../../images/img-2.svg'
import img3 from '../../images/img-3.svg'


export const homeObjectOne={
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Learn More About Nature',
    headline: 'Keep reading to find the right word to describe your picturesque scene',
    description: 'Description here',
    buttonLabel: 'See Details',
    imgStart: false,
    img: img1,
    alt:'Car',
    dark: true,
    primary: true,
    darkText:false,
    to:'describtion'
}

export const homeObjectTwo={
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transaction with zero fees',
    description: 'Description here',
    buttonLabel: 'Discover',
    imgStart: true,
    img: img2,
    alt:'Car',
    dark: false,
    primary: false,
    darkText:true,
    to:'/'
}

export const homeObjectThree={
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transaction with zero fees',
    description: 'Description here',
    buttonLabel: 'Sign Up',
    imgStart: true,
    img: img3,
    alt:'Car',
    dark: false,
    primary: false,
    darkText:true,
    to:'signup'
}