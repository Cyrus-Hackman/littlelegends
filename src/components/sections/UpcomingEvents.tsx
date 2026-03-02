import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const upcomingEvents = [
  {
    id: 1,
    title: "Parent-Teacher Conferences",
    date: "Mar 15",
    fullDate: "March 15, 2026",
    time: "4:00 PM - 7:00 PM",
    location: "Main Campus Gym",
    category: "Academic",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Spring Musical: The Lion King Jr.",
    date: "Mar 22",
    fullDate: "March 22, 2026",
    time: "6:30 PM",
    location: "School Auditorium",
    category: "Arts",
    color: "bg-purple-500",
  },
  {
    id: 3,
    title: "Varsity Soccer vs. Oakridge High",
    date: "Apr 05",
    fullDate: "April 05, 2026",
    time: "3:30 PM",
    location: "Little Legends Sports Field",
    category: "Athletics",
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Annual Science & Tech Fair",
    date: "Apr 12",
    fullDate: "April 12, 2026",
    time: "9:00 AM - 2:00 PM",
    location: "Science Wing & Courtyard",
    category: "Academic",
    color: "bg-orange-500",
  },
];

const parseEventDates = (event: typeof upcomingEvents[0]) => {
  const dateStr = event.fullDate;
  let startTimeStr = "00:00 AM";
  let endTimeStr = "11:59 PM";
  
  if (event.time) {
    const timeParts = event.time.split(" - ");
    startTimeStr = timeParts[0];
    if (timeParts.length > 1) {
      endTimeStr = timeParts[1];
    } else {
      endTimeStr = timeParts[0];
    }
  }

  const parseToDate = (dateString: string, timeString: string) => {
    return new Date(`${dateString} ${timeString}`);
  };

  const startDate = parseToDate(dateStr, startTimeStr);
  const endDate = parseToDate(dateStr, endTimeStr);

  if (event.time && event.time.split(" - ").length === 1) {
     endDate.setHours(endDate.getHours() + 1);
  }

  return { startDate, endDate };
};

const generateGoogleCalendarUrl = (event: typeof upcomingEvents[0]) => {
  const title = encodeURIComponent(event.title);
  const details = encodeURIComponent(`${event.category} Event`);
  const location = encodeURIComponent(event.location);
  
  const { startDate, endDate } = parseEventDates(event);

  const formatToISO8601 = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
  };

  const startISO = formatToISO8601(startDate);
  const endISO = formatToISO8601(endDate);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startISO}/${endISO}&details=${details}&location=${location}`;
};

const generateOutlookCalendarUrl = (event: typeof upcomingEvents[0]) => {
  const title = encodeURIComponent(event.title);
  const details = encodeURIComponent(`${event.category} Event`);
  const location = encodeURIComponent(event.location);
  
  const { startDate, endDate } = parseEventDates(event);

  const formatForOutlook = (date: Date) => {
    return date.toISOString();
  };

  const startStr = formatForOutlook(startDate);
  const endStr = formatForOutlook(endDate);

  return `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${title}&startdt=${startStr}&enddt=${endStr}&body=${details}&location=${location}`;
};

export function UpcomingEvents() {
  const handleAddToCalendar = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          
          {/* Section Header */}
          <div className="lg:w-1/3 space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Calendar size={16} />
                Mark Your Calendar
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground text-lg mt-4">
                Don't miss out on what's happening at Little Legends School. Join us for these exciting upcoming activities.
              </p>
              
              <div className="mt-8 hidden lg:block">
                <Button variant="outline" size="lg" className="group">
                  View Full Calendar
                  <Calendar className="ml-2 h-4 w-4 group-hover:text-primary transition-colors" />
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Events List */}
          <div className="lg:w-2/3">
            <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.1}>
              {upcomingEvents.map((event) => (
                <StaggerItem key={event.id}>
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden"
                  >
                    {/* Category Color Indicator Line */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${event.color}`} />

                    {/* Date Block */}
                    <div className="flex-shrink-0 bg-muted/50 rounded-lg p-3 md:p-4 text-center min-w-[100px] border border-border/50">
                      <span className="block text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {event.date.split(' ')[0]}
                      </span>
                      <span className="block text-3xl font-bold text-foreground mt-1">
                        {event.date.split(' ')[1]}
                      </span>
                    </div>

                    {/* Event Details */}
                    <div className="flex-grow space-y-3">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-muted ${event.color.replace('bg-', 'text-').replace('500', '600')}`}>
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <Clock size={16} className="text-primary/70" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate">
                          <MapPin size={16} className="text-primary/70" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-border">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-full md:w-auto text-primary hover:text-primary hover:bg-primary/10 gap-2"
                          >
                            <CalendarPlus size={16} />
                            Add to Calendar
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleAddToCalendar(generateGoogleCalendarUrl(event))}>
                            Google Calendar
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleAddToCalendar(generateOutlookCalendarUrl(event))}>
                            Microsoft Calendar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="mt-8 lg:hidden text-center">
              <Button variant="outline" className="group w-full sm:w-auto">
                View Full Calendar
                <Calendar className="ml-2 h-4 w-4 group-hover:text-primary transition-colors" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
