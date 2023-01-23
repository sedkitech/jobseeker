import { Skeleton } from '@mantine/core';

export const TextSkeleton = () => {
  return (
    <div style={{ margin: '20px 0px' }}>
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={8} mt={6} width="70%" radius="xl" />

      {/* other content */}
      <Skeleton style={{ margin: '20px 0px' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum vel unde ipsa soluta amet vitae, laudantium, quasi eum ex quisquam perferendis rem aut facere obcaecati quae quam quod repudiandae facilis repellendus veniam iure possimus, officiis maiores? Quae sunt nobis unde molestias dolores ea distinctio delectus possimus rerum laborum vero similique corporis dignissimos quaerat, voluptates dolor mollitia minus maxime quo cumque deserunt ipsam! Eos sint libero, saepe ullam optio perspiciatis placeat laboriosam, temporibus quos est rerum earum! Numquam, a, asperiores doloribus sit similique atque nam accusantium rerum et officiis iure? Blanditiis velit ullam facilis at ut ipsam autem unde dolores? Ratione?
      </Skeleton>
    </div>
  )
}
