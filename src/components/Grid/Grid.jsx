import { Container, Grid, Image, SimpleGrid, Skeleton, rem } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid() {
const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

return (
    // <Container size="lg">
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        
        <Image 
        height={PRIMARY_COL_HEIGHT} radius="md" animate={false}
        src="https://drive.google.com/uc?export=view&id=1925Vfxi29A6sppBA8G9dJpcqutCqSbnv"/>
        <Grid gutter="md">
        <Grid.Col>
            <Image src="https://drive.google.com/uc?export=view&id=1kmMaAg6pPkd_fHpZhYChiShtZja01aBA" height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />

        </Grid.Col>
        <Grid.Col span={6}>
            <Image src="https://drive.google.com/uc?export=view&id=1uViWINKQq594Wa73fA2Qzy_ggo6zcCog" fit='cover' h={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
        </Grid.Col>
        <Grid.Col span={6}>
            <Image src="https://drive.google.com/uc?export=view&id=1S1w4v7wGtfthaz-qClRf6RIX6w7MoCIP" fit='cover' h={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
        </Grid.Col>
        </Grid>
    </SimpleGrid>
    // </Container>
);
}