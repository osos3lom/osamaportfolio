"use client"

import React from "react"

interface IonIconProps {
    name: string
    className?: string
}

export default function IonIcon({ name, className }: IonIconProps) {
    // @ts-ignore - ion-icon is a custom element defined by ionicons package
    return <ion-icon name={name} class={className} />
}
