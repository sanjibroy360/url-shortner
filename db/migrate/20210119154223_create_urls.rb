class CreateUrls < ActiveRecord::Migration[6.1]
  def change
    create_table :urls do |t|
      t.string :original_url
      t.string :slug
      t.integer :click_count, :default => 0
      t.boolean :pinned, :default => false

      t.timestamps
    end
  end
end
