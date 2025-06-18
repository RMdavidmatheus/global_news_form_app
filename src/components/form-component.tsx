import { Button, Form, Input, Select, SelectItem } from "@heroui/react";
import type { Key } from "@react-types/shared";
import { useState } from "react";

export function FormComponent() {
  const [submitted, setSubmitted] = useState<{
    [k: string]: FormDataEntryValue;
  } | null>(null);

  const [sectorValue, setSectorValue] = useState<Set<Key>>(new Set([]));
  const [completed, setCompleted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    if (form.checkValidity()) {
      const data = Object.fromEntries(new FormData(e.currentTarget));
      setSubmitted(data);
      setCompleted(true);
    } else {
      form.reportValidity();
      setCompleted(false);
    }
  };

  const sectorTypes = [
    { key: "salud", label: "Salud" },
    { key: "banca", label: "Banca" },
    { key: "gobierno", label: "Gobierno" },
    { key: "energia", label: "Energia" },
    { key: "tecnologia", label: "Tecnologia" },
    { key: "otros", label: "Otros" },
  ];

  return (
    <div className="flex flex-col gap-3 p-6 max-w-4xl mx-auto">
      <h2 className="text-[#123A54] font-semibold text-2xl">
        Solicita tu informe gratuito
      </h2>
      <p>
        Te enviaremos un reporte de ejemplo con tendencias específicas de tu
        sector.
      </p>
      <div className="flex flex-col pt-5">
        <Form
          className="w-full max-w-xs gap-3"
          onSubmit={onSubmit}
          validationBehavior="native"
        >
          <Input
            isRequired
            errorMessage="Por favor, ingresa un nombre"
            name="name"
            variant="bordered"
            color="primary"
            className="w-[550px]"
            placeholder="Ingresa tu nombre"
            type="text"
          />
          <Input
            isRequired
            errorMessage="Por favor, ingresa un nombre de empresa"
            name="nameCompany"
            variant="bordered"
            color="primary"
            className="w-[550px]"
            placeholder="Ingresa el nombre de tu empresa"
            type="text"
          />
          <Input
            isRequired
            errorMessage="Por favor, ingresa un correo electrónico"
            name="email"
            variant="bordered"
            color="primary"
            className="w-[550px]"
            placeholder="Ingresa tu correo electrónico"
            type="email"
          />

          <Select
            isRequired
            errorMessage="Por favor, selecciona un sector"
            className="w-[550px]"
            selectedKeys={sectorValue}
            name="sector"
            variant="bordered"
            color="primary"
            placeholder="Selecciona tu sector"
            disallowEmptySelection
            selectionMode="single"
            onSelectionChange={(keys) =>
              setSectorValue(new Set(keys as Iterable<Key>))
            }
          >
            {sectorTypes.map((sector) => (
              <SelectItem key={sector.key}>{sector.label}</SelectItem>
            ))}
          </Select>
          <p>{sectorValue}</p>

          <Button
            type="submit"
            variant="flat"
            color="primary"
            className="w-[550px]"
          >
            Enviar
          </Button>
          {submitted && (
            <div className="text-small text-default-500">
              You submitted: <code>{JSON.stringify(submitted)}</code>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
