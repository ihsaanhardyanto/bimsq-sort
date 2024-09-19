import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function ServiceItem({ title, description, step, complexity }) {
  return (
    <div className="flex transform flex-col items-start rounded-md bg-slate-300 p-5 transition hover:-translate-y-2 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
      <Accordion type="single" collapsible className="no-underline">
        <AccordionItem value="item-1" style={{ borderBottom: "none" }}>
          <AccordionTrigger className="hover:no-underline">
            <div>
              <h1 className="mb-1 text-lg font-semibold text-gray-600 dark:text-gray-200">
                {title}
              </h1>
              <div>
                <h2 className="mb-3 mt-2 text-base font-semibold text-gray-600 dark:text-gray-200">
                  Complexity
                </h2>
                <p className="flex flex-row flex-wrap items-center justify-center gap-2 text-xs md:text-sm">
                  {complexity.map((item) => (
                    <span
                      key={item}
                      className="text-md inline-block rounded-md bg-slate-200 px-2 py-1 text-gray-600 dark:bg-slate-900 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <p className="text-md whitespace-pre-wrap text-justify text-gray-600 dark:text-gray-300">
              {description}
            </p>
            <p className="text-md whitespace-pre-wrap text-justify text-gray-600 dark:text-gray-300">
              {step}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default ServiceItem;
