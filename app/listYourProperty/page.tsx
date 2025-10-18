import PagesHero from '@/components/utils/PagesHero'
// import ContentNowSection from '@/components/website/listYourProperty/ListYourPropertyContactForm'
import React from 'react'

const page = () => {
  return (
    <div>
        <PagesHero
               title={"List Your Property"}
               bgSrc={"/images/p4.jpg"}
               crumbs={[{ label: "Home", href: "/" }]}
             />
      {/* <ContentNowSection/> */}
    </div>
  )
}

export default page