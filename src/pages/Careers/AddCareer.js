import { TextInput, NumberInput, Textarea, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation, useQueryClient } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { addCareer } from '../../utilities/loaders/CareersLoader';
import { getCareers } from './../../utilities/loaders/CareersLoader';
import { useQuery } from 'react-query';
function AddCareer() {
  const queryClient = useQueryClient()

  const {
    isLoading,
    error,
    data
  } = useQuery("careers", getCareers)

  const form = useForm({
    initialValues: {
      title: '',
      salary: undefined,
      location: '',
      description: ''
    },

    validate: {
      title: (value) => (value.length < 2 ? 'Invalid title' : null),
      salary: (value) => (value === undefined
        ? 'Salary is required' :
        value < 0 ?
          "Invalid salary"
          : null),
      location: (value) => (value.length < 2 ? 'Invalid location' : null),
      description: (value) => (value.length < 10 ? 'Description must have at least 10 letters ' : null),

    },
  });

  const addCareerMutation = useMutation(addCareer, {
    onSuccess: () => {
      // invalidates cache and refetch
      queryClient.invalidateQueries("careers")
    }
  })
  let index
  if (!isLoading && !error)
    index = data.length;

  const addNewCareer = (values) => {
    console.log(values)
    const uuid = uuidv4();
    const id = index
    const career = {
      ...values,
      // id,
      uuid,
      timestamp: Date.now()
    }
    console.log(career)
    addCareerMutation.mutate(career)

    form.reset();
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => addNewCareer(values))}>
        <TextInput
          withAsterisk
          label="Title"
          placeholder="Title"
          {...form.getInputProps('title')}
        />

        <NumberInput
          style={{ marginTop: 15 }}
          withAsterisk
          label="Salary"
          placeholder="0"
          {...form.getInputProps('salary')}
          //description="Salary value will increase incrementally when control is hold"
          stepHoldDelay={500}
          stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
        />
        <TextInput
          style={{ marginTop: 15 }}
          withAsterisk
          label="Location"
          placeholder="Location"
          {...form.getInputProps('location')}
        />

        <Textarea
          style={{ marginTop: 15 }}
          withAsterisk
          placeholder="Job Description..."
          label="Description"
          variant="filled"
          minRows={2}
          maxRows={4}
          {...form.getInputProps('description')}

        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export { AddCareer }