import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function FAQ() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-24 space-y-4">
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Что такое портал государственных услуг?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Портал государственных услуг представляет собой онлайн-платформу,
              предназначенную для удобного и быстрого доступа граждан к
              различным государственным услугам и информации о государственных
              органах.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Какие услуги предоставляются на портале?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              На портале предоставляется широкий спектр государственных услуг,
              включая оформление документов, оплата налогов, запись к врачу,
              получение государственных пособий и многое другое.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              Как обеспечивается безопасность данных на портале?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              На портале государственных услуг применяются современные
              технологии защиты данных, такие как шифрование и аутентификация,
              чтобы обеспечить безопасность личной информации пользователей.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Как связаться со службой поддержки?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Вы можете связаться с нашей службой поддержки по электронной почте
              по адресу 220103035@stu.sdu.edu.kz
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>В какое время вы работаете?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Мы работаем с 08:00 до 22:00 каждый день.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Где находится ваш офис?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Университет SDU</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
