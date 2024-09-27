"use client"
import React, { useState } from "react";
import { TEMPLATE } from "../../(components)/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface PROPS {
  selectTemplate?: TEMPLATE;
  userFormInput:any;
  loading:boolean
}

const FormSection = ({ selectTemplate,userFormInput }: PROPS) => {
    
    const [formData,setFormData] = useState<any>();
    const handleInputChange=(e:any)=>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }
    
    const onSubmit = (e:any)=>{
        e.preventDefault()
        userFormInput(formData)
    }

  return (
    <div className="p-5 shadow-md border rounded-lg">
      {/* @ts-ignore*/}
      <Image src={selectTemplate?.icon} alt="logo" width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2">{selectTemplate?.name}</h2>
      <p className="text-gray-600 text-sm">{selectTemplate?.desc}</p>
      <form className="mt-6" action="" onSubmit={onSubmit}>
        {selectTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold" htmlFor="">{item.label}</label>
            {item.field == "input" ? 
              <Input name={item.name} required={item?.required} onChange={handleInputChange}/>
             : item.field == "textarea" ? 
              <Textarea name={item.name} required={item?.required} onChange={handleInputChange}/>
             : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6" > Generate Content</Button>
      </form>
    </div>
  );
};

export default FormSection;
