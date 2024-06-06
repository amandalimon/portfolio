"use client"
import { ChangeEvent, useTransition } from "react"
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LocalSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale()

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`)
        })
    }

    return (
        <label className="border-1 rounded">
            <p className="sr-only">change language</p>
            <select
                defaultValue={localActive}
                onChange={onSelectChange}
                disabled={isPending}
                className="bg-transparent"
            >
                <option value="es">Español</option>
                <option value="en">English</option>
            </select>
        </label>
    )
}