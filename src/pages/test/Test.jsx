import React, { useEffect } from "react";
import { Button, Switch } from "@mantine/core";
import { OutlinedFlag } from "@mui/icons-material";
import { useDisclosure } from "@mantine/hooks";

function Test() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="w-[300px] h-[400px] bg-background-secondary text-text rounded p-5 flex flex-col gap-3">
          <h1>Hello World</h1>
          <p className="text-text-secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sit
            nihil iusto omnis adipisci iste sint impedit, magni quidem laborum
            reiciendis aliquam quia assumenda. Vel rerum quis saepe quas
            officiis?
          </p>
          <button className="p-3 bg-primary/95 border border-primary hover:text-text-hover hover:bg-background hover:border-border transition-all duration-300 rounded">
            {" "}
            Hello World
          </button>
          <button className="p-3 bg-secondary rounded"> Hello World</button>
          <input type="checkbox" className="accent-accent" />
        </div>

        {/* <Button
        variant="gradient"
        color="grape"
        size="xl"
        gradient={{ from: "blue", to: "pink", deg: 130 }}
        leftSection={<OutlinedFlag />}
        loading={loading}
        >
        Hello World
      </Button>
      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" /> */}
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="w-[600px] h-[800px] bg-background text-text border border-border rounded p-5 flex justify-center items-center flex-col gap-3">
          <div className="w-[300px] h-[200px] bg-background-secondary"></div>
          <div className="w-[300px] h-[200px] bg-background-secondary"></div>

        </div>

        {/* <Button
        variant="gradient"
        color="grape"
        size="xl"
        gradient={{ from: "blue", to: "pink", deg: 130 }}
        leftSection={<OutlinedFlag />}
        loading={loading}
        >
        Hello World
      </Button>
      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" /> */}
      </div>
    </>
  );
}

export default Test;
