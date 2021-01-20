class Url < ApplicationRecord
  validates :original_url, presence: true
  validates :original_url, format: URI::regexp(%w[http https])
  validates :original_url, format: {
                             without: /\s/,
                             message: "must contain no spaces",
                           }

  def generate_unique_slug
    self.slug = generate_random_alphanumeric_string
  end

  def generate_random_alphanumeric_string
    loop do
      slug = SecureRandom.alphanumeric(6)
      break slug unless Url.where(slug: slug).exists?
    end
  end
end
