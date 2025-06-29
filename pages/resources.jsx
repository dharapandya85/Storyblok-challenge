// pages/[slug].jsx
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";

export default function Page({ story }) {
  return (
    <main>
      {story ? (
        <StoryblokComponent blok={story.content} />
      ) : (
        <p>No content found</p>
      )}
    </main>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug ?? "home"; // default fallback
  const sbApi = getStoryblokApi();
  const { data } = await sbApi.get(`cdn/stories/${slug}`, {
    version: "draft", // or "published"
  });

  return {
    props: {
      story: data.story ?? null,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const sbApi = getStoryblokApi();
  const { data } = await sbApi.get("cdn/links/");

  const paths = Object.keys(data.links).map((linkKey) => {
    const slug = data.links[linkKey].slug;
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
