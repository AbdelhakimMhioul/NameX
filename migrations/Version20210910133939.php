<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210910133939 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE url ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE url ADD CONSTRAINT FK_F47645AEA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_F47645AEA76ED395 ON url (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE url DROP FOREIGN KEY FK_F47645AEA76ED395');
        $this->addSql('DROP INDEX IDX_F47645AEA76ED395 ON url');
        $this->addSql('ALTER TABLE url DROP user_id');
    }
}
