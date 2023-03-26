interface EventCardModel {
    id: number
    title: string,
    tag: string,
    name: string,
    location: string,
    creatorImage: string,
    eventImage: string,
    class: string,
    time: string
}

interface TestimonalCardModel {
    id: number
    testimonal: string,
    name: string,
    creatorImage: string,
}

export { EventCardModel, TestimonalCardModel }