"use client"
import React, { useState } from 'react'
import FormSection from '../(components)/FormSection'
import OutputSection from '../(components)/OutputSection'
import { TEMPLATE } from '../../(components)/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowBigLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AIModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/clerk-react'
import moment from 'moment'

interface PROPS {
  params: {
    'template-slug': string
  }
}

const CreateNewContent = (props: PROPS) => {
  const selectTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === props.params['template-slug'])
  const [loading, setLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState<string>('')
  const { user } = useUser()

  const GenerateAIContent = async (FormData: any) => {
    setLoading(true)
    const SelectedPrompt = selectTemplate?.aiPrompt
    const FinalAIPrompt = JSON.stringify(FormData) + ", " + SelectedPrompt
    const result = await chatSession.sendMessage(FinalAIPrompt)
    const responseText = await result.response.text()
    console.log(responseText)
    setAiOutput(responseText)
    await SaveInDb(FormData, selectTemplate?.slug, responseText)
    setLoading(false)
  }

  const SaveInDb = async (FormData: any, slug: string | undefined, aiResp: string) => {
    if (!slug) return

    const result = await db.insert(AIOutput).values({
      FormData: JSON.stringify(FormData),
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress || '',
      createdAt: moment().format('DD/MM/yyyy')
    })
  }

  return (
    <div className='p-10'>
      <Link href={'/dashboard'}><Button><ArrowBigLeftIcon />Back</Button></Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection loading={loading} userFormInput={(e: any) => GenerateAIContent(e)} selectTemplate={selectTemplate} />
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent
