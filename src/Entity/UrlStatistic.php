<?php

namespace App\Entity;

use App\Repository\UrlStatisticRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UrlStatisticRepository::class)
 */
class UrlStatistic
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Url::class, inversedBy="statistics")
     * @ORM\JoinColumn(nullable=false)
     */
    private $url;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $clicks;

    /**
     * @ORM\Column(type="date")
     */
    private $date;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUrl(): ?Url
    {
        return $this->url;
    }

    public function setUrl(?Url $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getClicks(): ?int
    {
        return $this->clicks;
    }

    public function setClicks(?int $clicks): self
    {
        $this->clicks = $clicks;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }
}
