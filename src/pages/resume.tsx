import Image from 'next/image'
import React from 'react'
import accImage from "../utils/resume.webp"
import resumePdf from "/resume.pdf"
import { Button } from '@mui/material'

type Props = {}

const Resume = (props: Props) => {
    return (
        <div>
            <h2 style={{ fontSize: 32, fontFamily: 'Poppins', fontWeight: 'bold', marginLeft: 20, marginTop: 2, }}>Resume</h2>
            <div style={{ display: 'flex' }}>
                <Image src={accImage} style={{ width: '1000px', height: '1200px' }} alt='Resume image' />
                <a href="/resume.pdf" download="My_Resume.pdf" style={{ textDecoration: 'none' }}>
                    <Button sx={{
                        bgcolor: '#f7f5bc',
                        borderRadius: '20px', // Set border radius to make it rounded
                        px: 4, // Horizontal padding
                        py: 1, // Vertical padding
                        marginRight: '10px',
                        '&:hover': {
                            bgcolor: '#ffe280', // Change color on hover
                        },
                        textTransform: 'none',
                        height: '70px',
                        color: 'black',
                        fontSize: 18
                    }}
                    >Download resume
                    </Button>
                </a>
            </div>
        </div>
    )
}

export default Resume