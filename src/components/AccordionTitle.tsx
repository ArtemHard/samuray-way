type accordionTitlePropsType = {
    title:string
}

const AccordionTitle= ({title} : accordionTitlePropsType) => {

    return (
        <h3>{title}</h3>
    )
};

export default AccordionTitle