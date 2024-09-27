import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}

export interface TEMPLATE {
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?: FORM[]
}

const TemplateListSection = ({ userSearchInput }: any) => {
    const [templateList, setTemplateList] = useState(Templates)
    
    useEffect(() => {
        console.log(userSearchInput)
        if (userSearchInput) {
            const filterData = Templates.filter(item => item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
            setTemplateList(filterData);
        } else {
            setTemplateList(Templates)
        }
    }, [userSearchInput])
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-4'>
            {
                templateList.map((item: TEMPLATE, index: number) => (
                    <div key={index} className='flex justify-center'>
                        <TemplateCard {...item} />
                    </div>
                ))
            }
        </div>
    )
}

export default TemplateListSection
