import Container from "@mui/material/Container";
import { TitleS, FullCenteredFlexBox } from "../FullCenteredFlexBox";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export const CareerPlan = () => {
  return (
    <Container component="main" maxWidth="md">
      <TitleS>Карьерный план</TitleS>
      <Timeline position="right">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Написать часть нир. Хорошо учиться на 4-5. Прочитать книги
            "мифических человеко месяц", "совершённый код"
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Написать научную статью на тему "Сравнение производительности
            платформ node, bun, deno." Поучаствовать в 3-ëх конференциях по моей специальности. Изучить язык
            программирования Java, написав на нëм проект.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2025
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Закончить ИТМО с красным дипломом. Решить 50 задач по программированию на leetcode.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2026
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Стать сеньором бекендером.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2027
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
          </TimelineSeparator>
          <TimelineContent>Получить зарплату 300 000 ₽ рублей.</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};
