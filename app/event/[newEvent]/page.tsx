import Event from "@/components/CardTemplate/Event/Event";
import EventCard from "@/components/CardTemplate/Event/EventCard";

export default function NewEvent({ params }: { params: { newEvent: string } }) {
    return (
      <div>
        <h1>New Event: {params.newEvent}</h1>
        <EventCard
        name={"Usha maam"}
        image="/images/man.jpg"
        description="You can rely on our amazing features list and also our customer services will be a great experience."
      />
      </div>
    );
  }