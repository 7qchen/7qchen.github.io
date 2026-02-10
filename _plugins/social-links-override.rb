# frozen_string_literal: true

# Override the default jekyll-socials tooltip titles with cleaner display names.
# The original plugin generates titles from YAML key names (e.g., "Github username"),
# this patches the render method to replace them with proper display names.

module Jekyll
  class SocialLinksTag < Liquid::Tag
    SOCIAL_TITLES = {
      "Email" => "Email",
      "Scholar userid" => "Google Scholar",
      "Github username" => "GitHub",
      "Linkedin username" => "LinkedIn",
      "Cv pdf" => "CV",
      "X username" => "X",
      "Orcid id" => "ORCID",
      "Arxiv id" => "arXiv",
      "Dblp url" => "DBLP",
      "Semanticscholar id" => "Semantic Scholar",
      "Research gate profile" => "ResearchGate",
      "Rss icon" => "RSS",
    }.freeze

    alias_method :original_render, :render

    def render(context)
      html = original_render(context)
      SOCIAL_TITLES.each do |old_title, new_title|
        html = html.gsub("title='#{old_title}'", "title='#{new_title}'")
      end
      html
    end
  end
end
