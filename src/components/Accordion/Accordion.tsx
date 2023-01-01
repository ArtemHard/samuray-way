import AccordionTitle from "../AccordionTitle";
import AccordionBody from "../AccordionBody";

type AccordionType = {
    collapsed: boolean
}
const Accordion = ({collapsed} : AccordionType) => {

    return (
        <>
            <AccordionTitle title={'hello react'} />
            {/*<AccordionBody />*/}
            {collapsed ? null : <AccordionBody />}
        </>
    )
}

export default Accordion