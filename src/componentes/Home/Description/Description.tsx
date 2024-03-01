import styles from "./Description.module.sass";
import Image from 'next/image';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABJAEkDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAABAMFAgEG/8QAHRAAAgIDAQEBAAAAAAAAAAAAAAIBAwQhMRESQf/EABkBAQEBAQEBAAAAAAAAAAAAAAMCBAEABf/EABsRAQEBAQEAAwAAAAAAAAAAAAABAhEhAzFB/9oADAMBAAIRAxEAPwD4fw8mC0qcyo+anUcrBeuCaxsTUvotFxWuC8Ke1IIWvRm2XNEdQ1sGk9YO5D2FWs9+nBWyNkzTL4OwqUJsopoItBlxWixNV2MoXgdI2Nx44afwOsl0Vi1r1w5x14NVNA6R0GyvRn5KeG1aujMy16TFSsW6PJIiMjskBpVcPadEXk9ZyLMZ8Q3VEnY7Gnhmo2x2M3DRL4jUbWNyBq8M3Hfg5X0HoNj27hlZn6aFz6MvLbpMcjJyeyH9LZM7kN6JCSqTYTZw02nM2HJnic76Wj7G49nDJRxlNh23jRPW7RaMW3Ri02iVu0FaPWTrbdGdk2e+ntlugd9nvp2Cs4Le3skfo9tbZL0aRzoX2ewxODqC7AfFfVkYTUwRBFQGn0cfR9TiFfQSrhdQVads4a1irB7P0TDNsd52cenTnBogK//Z'

export const Description = () => {
    return (
        <section className={styles.Description}>
            <div className={styles.Description__imageContainer}>
            <Image
                src="/images/description.jpeg" 
                alt="products marketplace" 
                fill
                placeholder='blur'
                blurDataURL={PLACEHOLDER_IMAGE}
                />
                </div>
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: You Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    )
}